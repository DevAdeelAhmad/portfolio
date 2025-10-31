"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';

interface ImageUploadProps {
  onUpload: (url: string) => void;
  currentImageUrl?: string;
  className?: string;
}

export default function ImageUpload({ onUpload, currentImageUrl, className = "" }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentImageUrl || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Show preview immediately
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Upload file
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        onUpload(data.url);
        setPreviewUrl(data.url);
      } else {
        const error = await response.json();
        alert(`Upload failed: ${error.error}`);
        setPreviewUrl(currentImageUrl || null);
      }
    } catch (error) {
      alert('Upload failed');
      setPreviewUrl(currentImageUrl || null);
    } finally {
      setUploading(false);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`relative ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      <div
        onClick={handleClick}
        className="relative w-32 h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-gray-400 dark:hover:border-gray-500 transition-colors flex items-center justify-center overflow-hidden"
      >
        {previewUrl ? (
          <Image
            src={previewUrl}
            alt="Preview"
            fill
            className="object-cover"
          />
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400">
            <svg className="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="mt-1 text-xs">Click to upload</p>
          </div>
        )}

        {uploading && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-sm">Uploading...</div>
          </div>
        )}
      </div>
    </div>
  );
}
