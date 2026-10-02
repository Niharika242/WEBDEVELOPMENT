import { ArrowDown } from 'lucide-react';
import type { Project } from '../../data/projects';

interface ProjectVisualProps {
  project: Project;
}

const diagrams: Record<Project['visual'], { label: string; nodes: string[][] }> = {
  'ride-sharing': {
    label: 'Conceptual ride-sharing service flow',
    nodes: [
      ['React client'],
      ['Express · Node API'],
      ['Trip service', 'Driver service', 'Pricing service'],
      ['MongoDB', 'Socket.io'],
      ['Live clients'],
    ],
  },
  'feedback-nlp': {
    label: 'Conceptual restaurant-review NLP pipeline',
    nodes: [
      ['Reviews'],
      ['Preprocessing'],
      ['Tokenization'],
      ['TF-IDF'],
      ['Model comparison'],
      ['Classification'],
      ['Insights'],
    ],
  },
  'spatial-ux': {
    label: 'Conceptual spatial interface interaction flow',
    nodes: [
      ['Spatial input'],
      ['Navigation model'],
      ['Interface state'],
      ['User feedback'],
    ],
  },
};

export default function ProjectVisual({ project }: ProjectVisualProps) {
  const diagram = diagrams[project.visual];

  return (
    <div className={`project-visual project-visual--${project.visual}`} data-cursor="project">
      <div className="project-visual__top mono">
        <span>ENGINEERING NOTE&nbsp; / &nbsp;{project.number}</span>
        <span>CONCEPTUAL FLOW</span>
      </div>
      <div className="project-visual__diagram" role="img" aria-label={project.visualDescription}>
        {diagram.nodes.map((layer, index) => (
          <div className="project-visual__layer" key={`${project.visual}-${index}`}>
            <div className={`project-visual__nodes${layer.length > 1 ? ' project-visual__nodes--group' : ''}`}>
              {layer.map((node) => <span className="project-visual__node" key={node}>{node}</span>)}
            </div>
            {index < diagram.nodes.length - 1 && (
              <span className="project-visual__connector" aria-hidden="true">
                <ArrowDown size={13} />
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="project-visual__bottom mono">
        <span>{diagram.label}</span>
        <span aria-hidden="true">↗</span>
      </div>
    </div>
  );
}
