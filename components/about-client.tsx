"use client";

import React from "react";
import { motion } from "framer-motion";

interface AboutClientProps {
  content: string;
}

export default function AboutClient({ content }: AboutClientProps) {
  // Split content into paragraphs (assuming paragraphs are separated by double newlines)
  const paragraphs = content.split('\n\n').filter(p => p.trim());

  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <motion.p
          key={index}
          className={index === 0 ? "mb-3" : ""}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 + (index * 0.1) }}
        >
          {paragraph}
        </motion.p>
      ))}
    </>
  );
}
