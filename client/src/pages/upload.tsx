import UploadForm from '../components/upload/UploadForm'

const Upload = (imageUpload: any, setImageUpload: any) => {

    return (
        <div>
            <h2>Upload Page</h2>
            <div className="upload-page">
                <UploadForm imageUpload={imageUpload} setImageUpload={setImageUpload} />
            </div>
        </div>
    )
}

export default Upload