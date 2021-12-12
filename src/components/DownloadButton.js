import { CSVLink } from "react-csv";
import { ImDownload2 } from 'react-icons/im';
import { Tooltip } from '@mui/material';
const getCSVinfo = (eventData) => {
  let tmpEntries = [];
  for (let i = 0; i < eventData.length; ++i) {
      tmpEntries.push([
        `${eventData[i].categories[0].title}`,
        `${eventData[i].id}`,
        `${eventData[i].title}`,
        `${eventData[i].geometries[0].date}`,
        `${eventData[i].geometries[0].coordinates[0]}`,
        `${eventData[i].geometries[0].coordinates[1]}`,
      ]);
    
  }
  return tmpEntries;
};

const generateCSVData = (eventData) => {
  const arr_columns = [
    "Event Type",
    "Event ID",
    "Event Name",
    "Event Date",
    "Longitude",
    "Latitude",
  ];
  const arr_infoTableData = getCSVinfo(eventData);
  const arrayContent = [arr_columns, ...arr_infoTableData];
  let str_csvContent = "sep=!\n";

  arrayContent.forEach((arr) => {
    const str_dataString = arr.join("!");
    str_csvContent += str_dataString + "\n";
  });
  return str_csvContent;
};

const getCSVFileName = () => {
  let dt = new Date();
  return `Disasters_Info_${dt.getDate()}_${dt.getMonth()}_${dt.getFullYear()}.csv`;
};

const DownloadButton = ({ eventData }) => {
  return (
    <div className="download-button">
        <CSVLink
          filename={getCSVFileName()}
          separator={"!"}
          data={generateCSVData(eventData)}
          asyncOnClick={true}
        >
        <h1 > 
         <ImDownload2 />
         </h1>
        </CSVLink>
    </div>
  );
};

export default DownloadButton;
