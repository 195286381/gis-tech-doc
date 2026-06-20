import { BookOpen, GitBranch, Map } from 'lucide-react';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Map className="size-5 text-emerald-600" />
          GIS 平台技术文档
        </>
      ),
    },
    links: [
      {
        text: '文档',
        url: '/docs',
        icon: <BookOpen />,
        active: 'nested-url',
      },
      {
        text: 'GitHub',
        url: 'https://github.com/195286381/gis-tech-doc',
        icon: <GitBranch />,
        external: true,
      },
    ],
  };
}
