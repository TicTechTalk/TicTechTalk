import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Instance from '../../../util/axiosConfig';
import { useEffect, useState } from 'react';

export default function BoardUpdate() {
    const { postNo } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, watch } = useForm();
    const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        Instance.get(`/boards/update/${postNo}`)
            .then((response) => {
                const data = response.data;
                Object.keys(data).forEach((key) => {
                    setValue(key, data[key]);
                });

                if (data.storedFileName) {
                    setImagePreview(`/upload/${data.storedFileName}`);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [postNo, setValue]);

    const onSubmit = (data) => {
        const formData = new FormData();
        console.log(data);
        formData.append('title', data.title);
        formData.append('category', data.category);
        formData.append('content', data.content);
        formData.append('link', data.link);
        if (data.boardFile && data.boardFile.length > 0) {
            formData.append('boardFile', data.boardFile[0]);
        }

        Instance.post(`/boards/update`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((response) => {
                console.log(response.data);
                const data = response.data;
                alert('글 수정이 완료되었습니다.');
                navigate(`/boards/${data}`);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleImageDelete = () => {
        setImagePreview('');
        setValue('storedFileName', '');
    };

    return (
        <div className='boardWriteBox roundedRectangle darkModeElement'>
            <form className='boardWriteForm' onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
                <input
                    type='text'
                    name='category'
                    className='hideElement'
                    {...register('category')}
                    readOnly
                />
                <input
                    className='darkModeElement'
                    type='text'
                    name='title'
                    {...register('title', { required: true })}
                />
                <textarea
                    className='darkModeElement'
                    name='content'
                    cols='30'
                    rows='30'
                    {...register('content', { required: true })}
                ></textarea>
                <input
                    className='darkModeElement'
                    type='text'
                    name='link'
                    {...register('link')}
                />
                {imagePreview && (
                    <div className='boardViewImg'>
                        <img src={imagePreview} height='200' alt='Board Image' />
                        <span onClick={handleImageDelete}>파일 삭제</span>
                    </div>
                )}
                <input className='darkModeElement' type='file' {...register('boardFile')} />
                <button type='submit' className='btnElement'>
                    UPDATE
                </button>
            </form>
        </div>
    );
}
