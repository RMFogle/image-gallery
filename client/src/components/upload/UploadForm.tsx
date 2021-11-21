import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { addImage } from '../../redux/actions/imageAction';
import { FormSubmit } from '../../utils/TypeScript';
import FileBase from 'react-file-base64';

const UploadForm = (errors: any) => {
    const dispatch = useDispatch()

    const [imageUpload, setImageUpload] = useState({ image: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMsg, setErroMsg] = useState(null);

    useEffect(() => {
        setErroMsg(errors);
    }, [errors]);

    useEffect(() => {
        setErroMsg(null); // reset error message on page load
    }, []);

    // const handleOnChange = (event: any) => {
    //     const file = event.target.files[0]
    //     setImageUpload(file)
    // };

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        dispatch(addImage(imageUpload));
        setIsSubmitted(true);
        clear();
    };

    const clear = () => {
        setImageUpload({ image: '' })
    }

    return (
        <React.Fragment>
        {errorMsg && errorMsg ? (
            <p className="errorMsg centered-message">{errorMsg}</p>
        ) : (
            isSubmitted && (
            <p className="successMsg centered-message">
                Photo uploaded successfully.
            </p>
            )
        )}
        <Form
            onSubmit={handleFormSubmit}
            method="post"
            className="upload-form"
        >
            <Form.Group>
            <Form.Label>Choose image to upload</Form.Label>
            {/* <Form.Control type="file" name="image" onChange={handleOnChange} /> */}
            <div className="image-upload"><FileBase type="file" multiple={false} onDone={({base64} : { base64: any}) => setImageUpload({ ...imageUpload, image: base64 })} /></div>
            </Form.Group>
            <Button
            variant="primary"
            type="submit"
            >
            Upload
            </Button>
        </Form>
        </React.Fragment>
    );
};

const mapStateToProps = (state: any) => ({
    images: state.images || [],
    errors: state.errors || {}
});

export default connect(mapStateToProps)(UploadForm);
