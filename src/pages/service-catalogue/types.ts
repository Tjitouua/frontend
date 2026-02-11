import React from 'react';

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  isExternal?: boolean;
}

export interface ServiceSection {
  id: string;
  title: string;
  items: ServiceItem[];
  categoryId: string;
}

export interface Tab {
  id: string;
  label: string;
}
