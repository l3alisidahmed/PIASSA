interface FormInputProps {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    width: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput : React.FC<FormInputProps> = ({label, type, placeholder, value, width, onChange}) => {
    return (
        <div className="flex flex-col">
            <label className="text-sm text-[#44536F]">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF3D00] ${width} shadow-md`}
            />
        </div>
    );
}

export default FormInput;