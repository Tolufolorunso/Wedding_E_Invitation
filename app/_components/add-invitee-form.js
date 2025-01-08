"use client";
import fetchApi from "@/utils/fetch-api";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

function AddInviteeForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const addInvitee = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetchApi("/", "POST", {
        firstname,
        lastname,
      });
      toast.success(res.message || "Invitation added successfully!");
      setTimeout(() => {
        router.refresh();
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "Something went wrong, please try again.");
    } finally {
      setFirstname("");
      setLastname("");
      setLoading(false);
    }
  };

  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control bg-secondary border-0 py-4 px-3"
          placeholder="Firstname of invitee"
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control bg-secondary border-0 py-4 px-3"
          placeholder="Lastname  of invitee"
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
          required
        />
      </div>
      <div>
        <button
          className="btn btn-primary font-weight-bold py-3 px-5"
          type="Add IV"
          onClick={addInvitee}
          disabled={!firstname || !lastname}
        >
          {loading ? "Adding Invitation..." : "Add Invitation"}
        </button>
      </div>
    </form>
  );
}

export default AddInviteeForm;
