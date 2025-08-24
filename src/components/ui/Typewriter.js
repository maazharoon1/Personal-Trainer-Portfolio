import React from "react";
import { MarkdownTypewriter } from "react-markdown-typewriter";
import remarkGfm from "remark-gfm";

const TypeWriterUi = ({ children, speed = 30 }) => {
  return (
    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl 2xl:prose-2xl max-w-full dark:prose-invert bg-accent-foreground/10 px-4 py-2 mt-3 rounded-2xl">
      <MarkdownTypewriter
        speed={speed}
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1
              className="text-3xl sm:text-4xl my-3 font-bold text-accent dark:text-accent-focus"
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="text-2xl sm:text-3xl mt-6 mb-2 font-semibold"
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className="text-xl sm:text-2xl mt-4 mb-2 font-medium"
              {...props}
            />
          ),
          h4: ({ node, ...props }) => (
            <h4
              className="text-lg sm:text-xl mt-4 mb-1 font-medium"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p
              className="leading-relaxed font-normal my-2 text-base sm:text-lg"
              {...props}
            />
          ),
          a: ({ node, ...props }) => (
            <a
              className="underline font-mono text-sm my-1 text-blue-500 hover:text-blue-600 transition-colors duration-200"
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul
              className="list-disc list-inside my-4 space-y-1"
              {...props}
            />
          ),
          ol: ({ node, ...props }) => (
            <ol
              className="list-decimal list-inside my-4 space-y-1"
              {...props}
            />
          ),
          li: ({ node, ...props }) => (
            <li className="text-base sm:text-lg" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong
              className="font-bold text-accent-content dark:text-accent"
              {...props}
            />
          ),
          em: ({ node, ...props }) => (
            <em className="italic" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-gray-400 pl-4 italic my-4"
              {...props}
            />
          ),
          code: ({ node, ...props }) => (
            <code
              className="bg-gray-200 dark:bg-gray-700 p-1 rounded-md text-sm font-mono"
              {...props}
            />
          ),
          pre: ({ node, ...props }) => (
            <pre
              className="bg-gray-800 text-white p-4 rounded-lg my-4 overflow-x-auto"
              {...props}
            />
          ),
          table: ({ node, ...props }) => (
            <table
              className="w-full text-left border-collapse my-4"
              {...props}
            />
          ),
          th: ({ node, ...props }) => (
            <th
              className="bg-gray-200 dark:bg-gray-700 p-2 font-bold uppercase text-sm border-b-2 border-gray-300 dark:border-gray-600"
              {...props}
            />
          ),
          td: ({ node, ...props }) => (
            <td
              className="p-2 border-b border-gray-200 dark:border-gray-700"
              {...props}
            />
          ),
          hr: ({ node, ...props }) => (
            <hr
              className="my-6 border-t border-gray-300 dark:border-gray-600"
              {...props}
            />
          ),
          img: ({ node, ...props }) => (
            <img
              className="max-w-full h-auto rounded-lg shadow-md my-4"
              {...props}
            />
          ),
        }}
      >
        {children}
      </MarkdownTypewriter>
    </div>
  );
};

export default TypeWriterUi;
