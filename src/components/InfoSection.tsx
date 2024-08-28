import { NextPage } from "next";
import { personalInfo, experiences } from "@/data/infoSectionData";

type InfoSectionProps= {
  infoType: 'personal' | 'experience';
}

const InfoSection= ({ infoType }:  InfoSectionProps) => {

  const data = infoType === 'personal' ? personalInfo : experiences;

  return (
    <div className="info-section">
      <h2>{data.title}</h2>
      <ul>
        {data.items.map((item, index) => (
          <li key={index}>
            <strong>{item.label}:</strong> {item.value}
          </li>
        ))}
      </ul>
      <button onClick={data.onEditClick}>Edit</button>
    </div>
  );
};

export default InfoSection;
