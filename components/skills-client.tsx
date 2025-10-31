"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

interface SkillsClientProps {
  skillsData: string[];
}

export default function SkillsClient({ skillsData }: SkillsClientProps) {
  return (
    <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
      {skillsData.map((skill, index) => (
        <motion.li
          className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          {skill}
        </motion.li>
      ))}
    </ul>
  );
}
