import { baseOptions } from '@/lib/layout.shared';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { ArrowRight, Database, GitBranch, MapPinned, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const stats = [
  ['10', '核心章节'],
  ['v1.2', 'Fumadocs 版本'],
  ['GitHub', '自动部署'],
  ['Netlify', '生产托管'],
];

const cards = [
  {
    icon: Database,
    title: '空间数据治理',
    body: '覆盖 PostGIS 建模、坐标转换、质量门禁、入库审计和数据发布。',
  },
  {
    icon: MapPinned,
    title: '地图服务体系',
    body: '定义矢量切片、缩放级别策略、图层权限和 Web GIS 前端渲染原则。',
  },
  {
    icon: ShieldCheck,
    title: '安全与运维',
    body: '沉淀权限控制、脱敏策略、监控告警、备份恢复和上线验收清单。',
  },
];

export default function HomePage() {
  return (
    <HomeLayout {...baseOptions()}>
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-6 py-12 md:py-20">
        <section className="gis-hero px-6 py-10 md:px-10 md:py-14">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
              Web GIS / PostGIS / Vector Tiles / Spatial API
            </p>
            <h1 className="mb-5 text-4xl font-semibold tracking-tight md:text-6xl">
              GIS 平台技术文档
            </h1>
            <p className="text-lg text-fd-muted-foreground md:text-xl">
              基于 Fumadocs 的工程化文档平台，沉淀 GIS 架构、空间数据、地图切片、API、权限和运维发布规范。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-800"
              >
                进入文档 <ArrowRight className="size-4" />
              </Link>
              <Link
                href="https://github.com/195286381/gis-tech-doc"
                className="inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium hover:bg-fd-accent"
              >
                查看仓库 <GitBranch className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div className="gis-stat p-5" key={label}>
              <div className="text-2xl font-semibold">{value}</div>
              <div className="text-sm text-fd-muted-foreground">{label}</div>
            </div>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <div className="gis-stat p-6" key={card.title}>
              <card.icon className="mb-4 size-7 text-emerald-700" />
              <h2 className="mb-2 text-xl font-semibold">{card.title}</h2>
              <p className="text-sm leading-6 text-fd-muted-foreground">{card.body}</p>
            </div>
          ))}
        </section>
      </main>
    </HomeLayout>
  );
}
