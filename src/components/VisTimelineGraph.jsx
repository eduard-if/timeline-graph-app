import React, { useCallback, useEffect } from 'react';
import { Timeline } from 'vis-timeline';
import { DataSet } from 'vis-data';
import { useRef } from 'react';
import { useState } from 'react';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css'

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

    // const handleItemClick = itemId => {

    //     timeline.focus(itemId, { animation: true });
    // };

    const handleItemClick = useCallback(
        (itemId) => {
            if (timeline) {
                timeline.focus(itemId, { animation: true });
            }
        },
        [timeline]
    );

    return (
        <div ref={timelineRef} style={{ height: '80vh' }} className='timelineContainer'></div>
    );
};

export default VisTimelineGraph;