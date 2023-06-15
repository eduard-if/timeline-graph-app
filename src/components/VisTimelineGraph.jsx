import React, { useCallback, useEffect } from 'react';
import { Timeline } from 'vis-timeline';
import { DataSet } from 'vis-data';
import { useRef } from 'react';
import { useState } from 'react';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css'
import { Button, ButtonGroup } from 'react-bootstrap';

const VisTimelineGraph = ({ items, options }) => {
    const timelineRef = useRef('null')
    const [timeline, setTimeline] = useState('');
    const [itemToEdit, setItemToEdit] = useState([]);

    useEffect(() => {
        const container = timelineRef.current;
        const itemsDataset = new DataSet(items)
        const newTimeline = new Timeline(container, itemsDataset, options);
        setTimeline(newTimeline);

        newTimeline.on('select', (properties) => {
            console.log('properties:', properties)
            const selectedItem = newTimeline.itemsData.get(properties.items[0])

            console.log(selectedItem)
            console.log('selected')
            newTimeline.focus(selectedItem.id, { animation: true, zoom: false });
            setItemToEdit(selectedItem)


        });


        return () => {
            if (newTimeline) {
                newTimeline.destroy();
            }
        };
    }, [options, items]);


    // const handleItemClick = useCallback(
    //     (itemId) => {
    //         if (timeline) {
    //             timeline.focus(itemId, { animation: true });

    //         }
    //     },
    //     [timeline]
    // );

    const zoomIn = () => {
        if (timeline) {
            timeline.zoomIn(1, { animation: true });
        }
    };

    const zoomOut = () => {
        if (timeline) {
            timeline.zoomOut(1, { animation: true });
        }
    };

    const fit = () => {
        if (timeline) {
            timeline.fit({ animation: true });
        }
    };

    const scrollLeft = () => {
        const window = timeline.getWindow();
        const newStart = window.start - 1000;
        timeline.moveTo(newStart, { animation: true });
    };

    const scrollRight = () => {
        const window = timeline.getWindow();
        const newStart = window.end - 1000;
        timeline.moveTo(newStart, { animation: true });
    };

    return (
        <>
            <div className='d-flex flex-row justify-content-center mt-1 mx-2 fixed-top' >
                {itemToEdit && itemToEdit.id ? (
                    <ButtonGroup className='shadow-sm' >
                        <Button className='btn-sm  ' variant='danger'>
                            <i className='bi bi-trash3-fill fs-6' ></i>
                        </Button>
                        <Button variant='light border-0 text-dark' as='div'>
                            <span className='' >{new Date(itemToEdit.start).toLocaleString('en-GB', { hour12: false })} - {new Date(itemToEdit.end).toLocaleString('en-GB', { hour12: false })}</span>
                            <span className='fw-bold'> {itemToEdit.content}</span>
                        </Button>
                        <Button className='btn-sm  ' variant='info '>
                            <i className='bi-pencil-square fs-6' ></i>
                        </Button>
                    </ButtonGroup>
                ) : (<div></div>)}

            </div >



            <div>
                <div ref={timelineRef}

                    // style={{ height: '80vh', width: '100%' }} 
                    className='timelineContainer' ></div>
            </div>

            <div className='d-flex flex-row justify-content-center fixed-bottom mb-5'>
                <ButtonGroup className='d-flex'>
                    <Button onClick={scrollLeft}
                        variant='outline-secondary'
                        className='border-0'
                    >
                        <i className='bi bi-chevron-left' ></i>
                    </Button>
                    <Button
                        onClick={zoomIn}
                        variant='outline-secondary'
                        className='border-0'
                    >
                        <i className='bi bi-zoom-in' ></i>
                    </Button>
                    <Button
                        onClick={fit}
                        variant='outline-secondary'
                        className='border-0'
                    >
                        Fit
                    </Button>
                    <Button
                        onClick={zoomOut}
                        type='button'
                        variant='outline-secondary'
                        className='border-0'
                    >
                        <i className='bi bi-zoom-out' ></i>
                    </Button>
                    <Button onClick={scrollRight}
                        variant='outline-secondary'
                        className='border-0'
                    >
                        <i className='bi bi-chevron-right' ></i>
                    </Button>
                </ButtonGroup>
            </div>
        </>
    );
};

export default VisTimelineGraph;