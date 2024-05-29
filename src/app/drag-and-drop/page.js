"use client";
import React, { useRef, useState } from "react";
import "../drag-and-drop/style.css";
import { dragAndDropData } from "@/utlis/dragAndDrop";
import Link from "next/link";

const DragandDrop = () => {
  const [people, setPeople] = useState(dragAndDropData);

  const dragPerson = useRef(0);
  const draggedOverPerson = useRef(0);

  const handleSort = () => {
    const personClone = [...people];
    const temp = personClone[dragPerson.current];
    personClone[dragPerson.current] = personClone[draggedOverPerson.current];
    personClone[draggedOverPerson.current] = temp;
    setPeople(personClone);
  };
  return (
    <div className="main-container">
      <h1>You Can Swap Position</h1>
      {people.map((item, index) => {
        return (
          <article
            className="team-member"
            draggable
            onDragStart={() => (dragPerson.current = index)}
            onDragEnter={() => (draggedOverPerson.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <img
              className="team-member-avatar"
              src={item.image_src}
              alt={item.name}
            />
            <div className="team-member-name">
              <h3>{item.name}</h3>
              <p>{item.designation}</p>
            </div>
            <ul className="social-links">
              {item.social_links.map((s_item) => {
                return (
                  <li>
                    <Link href={s_item.image_link}>
                      <img src={s_item.image_src} alt={s_item.image_alt_text} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </article>
        );
      })}
    </div>
  );
};

export default DragandDrop;
