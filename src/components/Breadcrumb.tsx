import React from "react";
import "./styles/breadcrumb.css";

interface BreadcrumbProps {
  items: { label: string; link?: string }[];
  separator?: string; // Tambahkan prop separator
}

export const Breadcrumb = ({ items, separator = "/" }: BreadcrumbProps) => {
  return (
    <nav className="breadcrumb">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.link ? (
              <a href={item.link} className="breadcrumb-link">
                {item.label}
              </a>
            ) : (
              <span className="breadcrumb-label">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="breadcrumb-separator">{separator}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
