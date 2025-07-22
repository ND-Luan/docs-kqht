import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Giáo viên nhập liệu nhanh, tiện lợi',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Giáo viên có thể dễ dàng ghi nhận điểm và nhận xét học sinh mà không cần dùng đến sổ giấy.
        Việc quản lý học sinh trở nên đơn giản và tiết kiệm thời gian hơn nhiều.
      </>
    ),
  },
  {
    title: 'Tiết kiệm thời gian cho giáo viên',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Phần mềm giúp giảm bớt việc ghi chép thủ công, tính toán điểm số hay viết nhận xét bằng tay.
        Giáo viên chỉ cần vài thao tác đơn giản để hoàn tất công việc, từ đó có thêm thời gian cho việc giảng dạy.
      </>
    ),
  },
  {
    title: 'Thống kê và báo cáo',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Tạo bảng điểm, biểu đồ kết quả, báo cáo chuyên cần… một cách tự động, hỗ trợ nhà trường trong việc quản lý tổng thể.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
