import React, { useEffect, useState } from "react";
import ContactCard from "../shared/contactCards/contactCards";
import FormModal from "../shared/formModal/formModal";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators } from "../../state";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

interface FormData {
  id: string;
  firstName: string;
  lastName: string;
  status: "active" | "inactive";
}

const Contact: React.FC = () => {
  const dispatch = useDispatch();
  const contactForms = useSelector((state: any) => state.contactForms);
  const swalPopup = withReactContent(Swal);
  const [allContactForms, setAllContactForms] = useState<any>(contactForms);
  const { updateContactForms } = bindActionCreators(actionCreators, dispatch);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState<FormData | null>(null);

  const alert = (type: string, message: string, title: string) => {
    if (type === "error") {
      swalPopup.fire({
        icon: type,
        title: title,
        text: message,
        confirmButtonColor: "#1f2937",
      });
    } else if (type === "success") {
      swalPopup.fire({
        title: title,
        text: message,
        icon: type,
        confirmButtonColor: "#1f2937",
      });
    }
  };

  const handleOpenModal = (data?: FormData) => {
    setEditData(data || null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (data: FormData) => {
    if (editData) {
      setAllContactForms((prevForms: any) =>
        prevForms.map((form: any) => (form.id === data.id ? data : form))
      );
      alert("success", `User updated successfully!!`, "Updated User");
    } else {
      const payload: any = data;
      payload.id = payload.firstName + payload.lastName;
      const exists = allContactForms.some(
        (contact: any) => contact.id === payload.id
      );
      if (!exists) {
        setAllContactForms([payload, ...allContactForms]);
        alert("success", `User created successfully!!`, "Success");
      } else {
        alert(
          "error",
          `User with name ${payload.firstName} already exists.`,
          "Oops..."
        );
      }
    }
  };

  const handleDelete = (id: number) => {
    Swal.fire({
      title: "Are you sure you want to delete this user?",
      text: "This action cannot be reverted",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1f2937",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedContactForms = allContactForms.filter(
          (contact: any) => contact.id !== id
        );
        setAllContactForms(updatedContactForms);
        alert("success", "User has been deleted.", "Deleted!");
      }
    });
  };

  const handleUpdate = (id: number) => {
    const contactForm = allContactForms.find((form: any) => form.id === id);
    setEditData(contactForm);
    setIsModalOpen(true);
  };

  useEffect(() => {
    updateContactForms(allContactForms);
  }, [allContactForms, updateContactForms]);

  return (
    <div className="h-full grid grid-rows-8 gap-1 ">
      <div className="row-span-1 flex justify-end items-center">
        <button
          onClick={() => handleOpenModal()}
          className="px-6 py-3  text-gray-800 border-[1px] border-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-opacity-50"
        >
          Create New Contact
        </button>
        {isModalOpen && (
          <FormModal
            onClose={handleCloseModal}
            onSubmit={handleSubmit}
            initialData={editData || null}
          />
        )}
      </div>
      <div className="row-span-6 lg:row-span-7 border-[1px] border-gray-800 h-full rounded-lg p-4 ">
        <div className="overflow-auto h-full">
          {allContactForms.length !== 0 ? (
            <div className="h-fit w-full flex flex-wrap gap-3 ">
              {allContactForms.map((item: any) => (
                <div
                  key={item.firstName}
                  className=" w-full md:w-[50%] lg:w-[40%] xl:lg:w-[25vw] h-[150px]"
                >
                  <ContactCard
                    firstName={item.firstName}
                    lastName={item.lastName}
                    id={item.id}
                    status={item.status}
                    onDelete={() => handleDelete(item.id)}
                    onUpdate={() => {
                      handleUpdate(item.id);
                    }}
                  ></ContactCard>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              <span className="text-sm text-center text-gray-500">
                No Contact Found Please add contact from Create Contact Button
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
