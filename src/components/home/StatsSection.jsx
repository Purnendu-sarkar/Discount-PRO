import React from 'react';
import { Users, ShoppingBag, Tag } from 'lucide-react';

const stats = [
  {
    id: 1,
    label: 'Active Users',
    value: '10K+',
    icon: Users,
  },
  {
    id: 2,
    label: 'Partner Brands',
    value: '50+',
    icon: ShoppingBag,
  },
  {
    id: 3,
    label: 'Active Coupons',
    value: '200+',
    icon: Tag,
  },
];


const StatsSection = () => {
    return (
        <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center p-8 bg-white rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay={stat.id * 100}
            >
              <stat.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default StatsSection;