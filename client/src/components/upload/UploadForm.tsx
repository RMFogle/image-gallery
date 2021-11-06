import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { beginAddImage } from '../../redux/actions/imageAction';
import { FormSubmit } from '../../utils/TypeScript';

const UploadForm = (errors: any) => {
    const dispatch = useDispatch()

    const [imageUpload, setImageUpload] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMsg, setErroMsg] = useState(null);

    useEffect(() => {
        setErroMsg(errors);
    }, [errors]);

    useEffect(() => {
        setErroMsg(null); // reset error message on page load
    }, []);

    const handleOnChange = (event: any) => {
        const file = event.target.files[0]
        setImageUpload(file)
    };

    const handleFormSubmit = (e: FormSubmit) => {
        e.preventDefault();
        if (imageUpload) {
        setErroMsg(null)
        dispatch(beginAddImage(imageUpload));
        setIsSubmitted(true);
        }
    };

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
            encType="multipart/form-data"
            className="upload-form"
        >
            <Form.Group>
            <Form.Label>Choose image to upload</Form.Label>
            <Form.Control type="file" name="image" onChange={handleOnChange} />
            </Form.Group>
            <Button
            variant="primary"
            type="submit"
            className={`${!imageUpload ? 'disabled submit-btn' : 'submit-btn'}`}
            disabled={imageUpload ? false : true}
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
