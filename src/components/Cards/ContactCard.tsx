import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

interface ContactCardProps {
    name: string;
    designation: string;
    post?: string;
    email: string;
    phone: string;
    image: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, designation, post, email, phone, image }) => {
    return (
        <div className="card w-72 bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200">
            <figure className="px-10 pt-10">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt={name} className="!object-contain w-full h-full" />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-lg font-bold">{name}</h2>
                <p className="text-sm font-medium text-secondary">{designation}</p>
                {post && <p className="text-xs text-gray-500 uppercase tracking-wide">{post}</p>}
                <div className="card-actions mt-4 flex gap-4">
                    <a href={`mailto:${email}`} className="btn btn-circle btn-sm btn-outline btn-primary" title="Email">
                        <AiOutlineMail size={18} />
                    </a>
                    <a href={`tel:${phone}`} className="btn btn-circle btn-sm btn-outline btn-secondary" title="Phone">
                        <FaPhone size={16} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
