// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'category',
      label: 'Phân hệ dành cho Giáo Viên',
      items: [
        'giao-vien/nhan-xet-thang',
        'giao-vien/nhan-xet-cac-mon',
        'giao-vien/phieu-be-ngoan',
        'giao-vien/xem-y-kien-phu-huynh',
        'giao-vien/topic',
        'giao-vien/lich-sinh-hoat',
        'giao-vien/in-ket-qua-hoc-tap',
        'giao-vien/danh-sach-hoc-sinh-lop',
      ],
    },
    {
      type: 'category',
      label: 'Phân hệ dành cho Ban Giám Hiệu',
      items: [
        'ban-giam-hieu/duyet-nhan-xet-thang',
        'ban-giam-hieu/duyet-nhan-xet-cac-mon',
        'ban-giam-hieu/xem-lich-sinh-hoat',
      ],
    },
    {
      type: 'category',
      label: 'Phân hệ dành cho Phụ huynh',
      items: [
        'phu-huynh/trang-chu',
        'phu-huynh/lich-sinh-hoat',
        'phu-huynh/nhan-xet-hoc-tap',
        'phu-huynh/english-report',
        'phu-huynh/nang-khieu',
        'phu-huynh/phieu-be-ngoan',
        'phu-huynh/suc-khoe',
      ],
    },
    {
      type: 'category',
      label: 'Phân hệ dành cho Quản trị',
      items: [
        'quan-tri/phan-cong-giao-vien',
        'quan-tri/danh-sach-chu-ky',
      ],
    },
    {
      type: 'category',
      label: 'Module for English Teacher',
      items: [
        'module-for-english-teacher/english-subject-comments',
        'module-for-english-teacher/topic',
      ],
    },
  ],

};

export default sidebars;
