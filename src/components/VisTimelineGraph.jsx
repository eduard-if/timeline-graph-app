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


    useEffect(() => {
        const container = timelineRef.current;
        const itemsDataset = new DataSet(items)
        const newTimeline = new Timeline(container, itemsDataset, options);
        setTimeline(newTimeline);

        newTimeline.on('select', (properties) => {
            const selectedItem = newTimeline.itemsData.get(properties.items[0])
            console.log(selectedItem)
            console.log('selected')
            newTimeline.focus(selectedItem.id, { animation: true, zoom: false });
        });


        return () => {
            if (newTimeline) {
                newTimeline.destroy();
            }
        };
    }, [options, items]);


    const handleItemClick = useCallback(
        (itemId) => {
            if (timeline) {
                timeline.focus(itemId, { animation: true });

            }
        },
        [timeline]
    );

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

    return (
        <>
            <div>
                <div ref={timelineRef} style={{ height: '80vh', width: '100%' }} className='timelineContainer' ></div>
            </div>

            <div className='d-flex flex-row justify-content-center fixed-bottom mb-5'>
                <ButtonGroup className='d-flex'>
                    {/* <Button onClick={handleScrollLeft} >Left</Button> */}
                    <Button
                        onClick={zoomIn}
                        type='button'
                        variant='outline-secondary'
                        className='border-0'
                    >
                        <i className='bi bi-zoom-in' ></i>
                    </Button>
                    <Button
                        onClick={fit}
                        type='button'
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
                    {/* <Button onClick={handleScrollRight} >Right</Button> */}
                </ButtonGroup>
            </div>
        </>
    );
};

export default VisTimelineGraph;