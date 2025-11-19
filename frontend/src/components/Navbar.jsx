import {Link} from 'react-router-dom';
import {PlusIcon} from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
        <div className="mx-auto max-w-6xl p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="Logo" className="w-10 h-10"/>
                    <h1 className="text-3xl font-bold text-primary">WebNotes</h1>
                </div>
                
                <Link to={"/create"} className="btn btn-primary">
                    <PlusIcon className="size-5 mr-2"/>
                    <span>New Note</span>
                </Link>
            </div>
        </div>
    
    </header>
  );
};

export default Navbar