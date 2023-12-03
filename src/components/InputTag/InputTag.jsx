import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { WithContext as ReactTags } from 'react-tag-input';

const InputTag = ({ onTagsChange }) => {
    const [tags, setTags] = useState([]);
    const { register } = useForm();

    const handleDelete = (i) => {
        const newTags = tags.slice(0);
        newTags.splice(i, 1);
        setTags(newTags);
        onTagsChange(newTags); // Notify the parent component about the tag removal
    };

    const handleAddition = (tag) => {
        const newTags = [...tags, tag];
        setTags(newTags);
        onTagsChange(newTags); // Notify the parent component about the tag addition
    };

    return (
        <div>
            <label className="block text-gray-700  font-bold mb-2">Tags</label>
            <ReactTags
                tags={tags}
                {...register('tags', { required: true })}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                placeholder="Enter tags"
                classNames={{
                    tag: 'inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2',
                    tagInput: 'border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500',
                    remove: 'text-gray-500 hover:text-red-600',
                }}
            />
        </div>
    );
};

export default InputTag;