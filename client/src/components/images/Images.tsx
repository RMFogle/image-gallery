import { useState, useEffect, Key } from 'react';
import { connect, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getImages } from '../../redux/actions/imageAction';
import Image from './Image';

interface IProps {
    errors: any
    images: []
}

const Images = ({errors, images}: IProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoading(true);
        dispatch(getImages());
    },[dispatch]);

    useEffect(() => {
        if (images.length > 0) {
        setIsLoading(false);
        }
    }, [images]);

    return (
        <div className="images-list">
        {/* {errors && errors && (
            <p className="errorMsg centered-message">{errors}</p>
        )} */}
        {isLoading ? (
            <div className="loading-msg centered-message">Loading...</div>
        ) : (
            images.map((image: any) => <Image image={image._id} />)
        )}
        </div>
    );
};


const mapStateToProps = (state: any) => ({
    images: state.images || [],
    errors: state.errors || {}
});

export default connect(mapStateToProps)(Images)