import React, { useEffect } from 'react';
import { Timeline } from 'vis-timeline';
import { DataSet } from 'vis-data';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { useState } from 'react';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css'

const VisTimelineGraph = ({ items, options }) => {
    const timelineRef = useRef('null')
    const [timeline, setTimeline] = useState('');

    useEffect(() => {
        const container = timelineRef.current;
        const newTimeline = new Timeline(container, items, options);
        setTimeline(newTimeline);

        return () => {
            if (newTimeline) {
                newTimeline.destroy();
            }
        };
    }, [items, options]);

    useEffect(() => {
        if (timeline) {
            timeline.setItems(items);
        }
    }, [timeline, items]);


    const handleItemClick = itemId => {

        timeline.focus(itemId, { animation: true });
    };

    if (timeline) {
        timeline.on('select', (properties) => {
            const selectedItem = timeline.itemsData.get(properties.items[0])
            console.log(selectedItem)
        });

    }


    return (
        <div ref={timelineRef} style={{ height: '80vh' }} className='timelineContainer'></div>
    );
};


export default VisTimelineGraph;