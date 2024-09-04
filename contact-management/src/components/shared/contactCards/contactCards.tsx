import React from "react";

interface ContactCardProps {
  firstName: string;
  lastName: string;
  status: string;
  onDelete: () => void;
  onUpdate: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
  firstName,
  lastName,
  status,
  onDelete,
  onUpdate,
}) => {
  return (
    <div className=" w-full h-full border-[1px] border-gray-800 min-w-fit min-h-fit bg-white shadow-md rounded-lg p-4 flex flex-col justify-between">
      <div className="flex items-center justify-center flex-col space-y-2">
        <h2
          className={`text-xl font-semibold ${
            (firstName + lastName).length > 20 ? "truncate-text" : ""
          }`}
        >{`${firstName} ${lastName}`}</h2>
        <p
          className={` capitalize ${
            status === "active" ? "text-green-500" : "text-red-500"
          } `}
        >
          {status}
        </p>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={onDelete}
          className="bg-red-300 text-white px-4 py-2 rounded-lg hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          <img
            src="assets/images/delete.svg"
            alt="menu"
            className="w-6 h-6"
          ></img>
        </button>
        <button
          onClick={onUpdate}
          className="bg-blue-300 text-white px-4 py-2 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <img
            src="assets/images/edit.svg"
            alt="menu"
            className="w-6 h-6"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
