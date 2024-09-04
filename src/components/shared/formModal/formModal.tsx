import React, { useEffect, useState } from "react";

interface ModalProps {
  onClose: () => void;
  onSubmit: (data: FormData) => void;
  initialData?: FormData | null;
}

interface FormData {
  id: string;
  firstName: string;
  lastName: string;
  status: "active" | "inactive";
}

const FormModal: React.FC<ModalProps> = ({
  onClose,
  onSubmit,
  initialData,
}) => {
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    id: initialData?.id || "",
    firstName: initialData?.firstName || "",
    lastName: initialData?.lastName || "",
    status: initialData?.status || "active",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  //Check if form is valid or not
  useEffect(() => {
    const isFormValid =
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      (formData.status === "active" || formData.status === "inactive");
    setIsSubmitEnabled(isFormValid);
  }, [formData]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">
          {initialData ? "Edit" : "Create"} User
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="flex text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="flex text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="flex text-sm font-medium text-gray-700">
              Status
            </label>
            <div className="flex">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={formData.status === "active"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Active</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="status"
                  value="inactive"
                  checked={formData.status === "inactive"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Inactive</span>
              </label>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 border-gray-800 border-2 bg-transparent text-gray-800 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              disabled={!isSubmitEnabled}
              type="submit"
              className={`px-4 py-2 rounded ${
                isSubmitEnabled
                  ? "bg-gray-800 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {initialData ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
