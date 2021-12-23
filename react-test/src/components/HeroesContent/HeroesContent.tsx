import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../helpers/get-data';
import { RootState } from '../../store/store';
import { Comic } from '../../types';
import { HeroesCard } from '../HeroesCard/HeroesCard';
import { Container } from './styles';

export const HeroesContent = () => {

    const dispatch = useDispatch();
    const [data, setComics] = useState<Comic[]>([]);
    const { comics, isLoading } = useSelector((state: RootState) => state.comics);

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    useEffect(() => {
        setComics(comics);
    }, [comics]);

    if (isLoading) {
        return (
            <Container>
                <div className='heroes__empty-content'>
                    <p>Loading...</p>
                </div>
            </Container>
        )
    } else {
        return (
            <Container>
                {
                    data.length > 0 &&
                    data.map((item: Comic) => (
                        <HeroesCard key={item.id} {...item} />
                    ))
                }
                {
                    data.length === 0 &&
                    <div className='heroes__empty-content'>
                        <p>Sorry, we can't find results for your search.</p>
                    </div>
                }
            </Container>
        )
    }

}
