import { marked } from "marked";
import { useEffect, useRef, useState } from "react";

export default function Edit() {
  const [text, setText] = useState("");
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const showPreview = async () => {
      if (!contentRef.current) return;
      const html = await marked.parse(text);
      contentRef.current.innerHTML = html;
    };
    showPreview();
  }, [text]);

  return (
    <div className="p-24 bg-slate-200">
      <textarea
        className="w-full h-[300px] p-4"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div ref={contentRef} className="tw-ignore p-4 bg-white"></div>
    </div>
  );
}
