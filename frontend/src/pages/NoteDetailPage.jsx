import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { ArrowLeftIcon, Trash2Icon } from "lucide-react";
import toast from "react-hot-toast";

import api from "../lib/axios";

import Navbar from '../components/Navbar';
import Loader from "../components/Loader";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await api.get(`/notes/${id}`);
        setNote(response.data);

      } catch (error) {
        if (error.response.status === 429) {
          toast.error("Too many requests! Please slow down and try again.");
        } else {
          toast.error("An error occurred. Please try again later.");
        }

        console.error("Error fetching note:", error);

      } finally {
        setLoading(false);
      }
    }

    fetchNote();

  }, [id]);

  const handleDelete = async (event, id) => {
    event.preventDefault();
    if (!globalThis.confirm("Delete this note? This action cannot be undone.")) {
      return;
    }

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted!");
      navigate("/");
    } catch (error) {
      if (error.response.status === 429) {
        toast.error("Too many requests! Please slow down and try again.");
      } else {
        toast.error("Failed to delete note. Please try again.");
      }
      console.error("Error deleting note:", error);
    }
  }

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please fill in both title and content fields.");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note saved!");
    } catch (error) {

      if (error.response.status === 429) {
        toast.error("Too many requests! Please slow down and try again.");
      } else {
        toast.error("Failed to save note. Please try again.");
      }
      console.error("Error saving note:", error);
      
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <Loader />;
  }

  console.log({ note });

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
            </Link>
            <button className="btn btn-error btn-outline" onClick={(event) => handleDelete(event, note._id)} >
              <Trash2Icon className="h-5 w-5" />
              Delete Note
            </button>
          </div>
          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note Title"
                  className="input input-bordered"
                  value={note.title}
                  onChange={(event) => setNote({ ...note, title: event.target.value })}
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  placeholder="Write something here..."
                  className="textarea textarea-bordered h-64"
                  value={note.content}
                  onChange={(event) => setNote({ ...note, content: event.target.value })}
                />
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage