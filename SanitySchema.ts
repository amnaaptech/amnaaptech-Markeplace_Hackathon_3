import { defineType } from 'sanity';
export const productType = defineType({
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
      validation: (Rule) =>
        Rule.required()
          .max(100)
          .error('Product name is required and cannot exceed 100 characters.'),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'URL-friendly identifier for the product.',
      options: {
        source: 'name',
        maxLength: 200,
      },
      validation: (Rule) =>
        Rule.required().error('Slug is required for product identification.'),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'A brief but detailed description of the product.',
      validation: (Rule) =>
        Rule.required()
          .min(20)
          .max(500)
          .error('Description must be between 20 and 500 characters.'),
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      description: 'Select the category for the product.',
      options: {
        list: [
          { title: 'Chair', value: 'chair' },
          { title: 'Sofa', value: 'sofa' },
          { title: 'Lamp', value: 'lamp' },
          { title: 'Light', value: 'light' },
        ],
      },
      validation: (Rule) =>
        Rule.required().error('Category is required.'),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price (in PKR)',
      description: 'Enter the price of the product.',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .error('Price must be a positive number.'),
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
      description: 'Enter the discount percentage (if applicable).',
      validation: (Rule) =>
        Rule.min(0)
          .max(100)
          .error('Discount must be between 0 and 100%.'),
    },
    {
      name: 'finalPrice',
      type: 'number',
      title: 'Final Price After Discount',
      description:
        'Automatically calculated price after applying the discount.',
      readOnly: true,
      initialValue: (doc: { price: number; discountPercentage?: number }) =>
        doc.discountPercentage
          ? Math.round(doc.price * (1 - doc.discountPercentage / 100))
          : doc.price,
    },
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
      description: 'Upload a high-quality image of the product.',
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.required().error('Product image is required.'),
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      description: 'Add tags to help with product filtering and search.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'availableStock',
      type: 'number',
      title: 'Stock Quantity',
      description: 'How many items of this product are in stock?',
      validation: (Rule) =>
        Rule.required()
          .min(0)
          .error('Stock quantity must be a non-negative number.'),
    },
    {
      name: 'seoTitle',
      type: 'string',
      title: 'SEO Title',
      description: 'Title for search engines (max 60 characters).',
      validation: (Rule) =>
        Rule.max(60).error('SEO title cannot exceed 60 characters.'),
    },
    {
      name: 'seoDescription',
      type: 'text',
      title: 'SEO Description',
      description: 'Meta description for search engines (max 160 characters).',
      validation: (Rule) =>
        Rule.max(160).error('SEO description cannot exceed 160 characters.'),
    },
  ],
});
