interface TextInputProperties {
    label?: string;
    placeholder?: string;
}

const TextInput = (props: TextInputProperties) => {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">{props.label}</span>
            </label>
            <input type="text" placeholder={props.placeholder} className="input input-bordered w-full" />
        </div>
    )
}

export default TextInput