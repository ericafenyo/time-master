import TextInput from '../../../components/TextInput'

const CreateActivity = () => {
    return (
        <dialog className="modal modal-bottom sm:modal-middle modal-open prose">
            <div className="modal-box">
                <TextInput label="Name" placeholder="Activity name" />
                <TextInput label="Description" placeholder="Activity description" />
                <TextInput label="Estimation" placeholder="Time estimation in seconds" />
                <div className='prose mt-4'>
                    <span>Use the format: 2w 4d 6h 45m</span>
                    <ul className='mt-0'>
                        <li>w = weeks</li>
                        <li>d = days</li>
                        <li>h = hours</li>
                        <li>m = minutes</li>
                    </ul>
                </div>
                <button className="btn btn-neutral w-full mt-8">Create activity</button>
            </div>
        </dialog>
    )
}

export default CreateActivity