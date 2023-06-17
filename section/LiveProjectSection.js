import React from 'react';
import {
    SlideFade,
    SimpleGrid
} from "@chakra-ui/react";
import { liveProjects } from '../constant';
import { LiveProjectCard } from '../components/LiveProjectCard';

export const LiveProjectSection = ({ project }) => {
    return (
        <SlideFade in offsetY={80} delay={0.2}>
            
            <SimpleGrid columns={[1, 2, 3, 3]} mt={5}>
                {liveProjects.map((project) => {
                    return (
                        <LiveProjectCard
                            key={project.name}
                            project={project}
                        />
                    );
                })}
            </SimpleGrid>
        </SlideFade>
    )
}
