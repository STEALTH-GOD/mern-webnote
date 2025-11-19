import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteDetailPage = () => {
  const [note,setNote]=useState(null);
  const [loading,setLoading]=useState(true);
  const [saving,setSaving]=useState(false);

  const navigate = useNavigate();

  const {id} = useParams();
  
  useEffect(()=>{
    const fetchNote = async()=>{
      try{
        const res= await api.get(`/notes/${id}`)
        setNote(res.data);
      }catch(error){
        console.log("error in fetching note",error)
        toast.error("Failed to fetch note details");
      }finally{
        setLoading(false);
      }
  }
  fetchNote();
  }, [id]);

  const handleDelete = async()=>{
    if(!window.confirm("Are you sure you want to delete this note?"))
      return;
    try{
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully");
      navigate("/");
    }catch (error){
      console.log("error in deleting",error)
      toast.error("Failed to delete note");
    }
  }

  const handleSaving = async()=>{
    if(!note.title.trim() || !note.content.trim()){
      toast.error("Please fill in all fields");
      return;
    }
    setSaving(true);

    try{
      await api.put(`/notes/${id}`,note);
      toast.success("Note saved successfully");
      navigate("/");
    }catch(error){
      console.log("Error saving note", error);
      toast.error("Failed to save note");
    }
    finally{
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10"/>
      </div>
    )
  }
 
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="size-5 mr-2"/>
              <span>Back to Notes</span>
            </Link>
            <button onClick={handleDelete} className="btn btn-error btn-outline">
              <Trash2Icon className="size-5 mr-2"/>
              <span>Delete Note</span>
            </button>
          </div>

          {/* content */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className='form-control mb-4'>
                <label className='label'>
                  <span className='label-text font-semibold'>Title</span>
                </label>
                <input 
                  type="text" 
                  placeholder='Note Title' 
                  className='input input-bordered input-primary w-full' 
                  value={note.title} 
                  onChange={(e)=>setNote({ ...note, title:e.target.value})} 
                />
              </div>

              <div className='form-control mb-6'>
                <label className='label'>
                  <span className='label-text font-semibold'>Content</span>
                </label>
                <textarea
                  placeholder='Note Content' 
                  className='textarea textarea-bordered textarea-primary w-full h-64'  
                  value={note.content}  
                  onChange={(e)=>setNote({ ...note, content:e.target.value})} 
                />
              </div>

              <div className="card-actions justify-end">
                <button className="btn btn-primary" disabled={saving} onClick={handleSaving}>
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