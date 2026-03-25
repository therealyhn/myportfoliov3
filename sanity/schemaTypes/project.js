import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short one-line project description shown in cards.',
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
      rows: 5,
      description: 'Full project description shown on the project page.',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Your role on the project, e.g. "Full Stack Developer".',
    }),
    defineField({
      name: 'title_sr',
      title: 'Title (Serbian)',
      type: 'string',
      description: 'Serbian translation of the title. Falls back to Title if empty.',
    }),
    defineField({
      name: 'tagline_sr',
      title: 'Tagline (Serbian)',
      type: 'string',
      description: 'Serbian translation of the tagline. Falls back to Tagline if empty.',
    }),
    defineField({
      name: 'overview_sr',
      title: 'Overview (Serbian)',
      type: 'text',
      rows: 5,
      description: 'Serbian translation of the overview. Falls back to Overview if empty.',
    }),
    defineField({
      name: 'role_sr',
      title: 'Role (Serbian)',
      type: 'string',
      description: 'Serbian translation of the role. Falls back to Role if empty.',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'e.g. "2024" or "2023–2024"',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g. "3 months"',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Live', value: 'Live'},
          {title: 'In Progress', value: 'In Progress'},
          {title: 'Case Study', value: 'Case Study'},
          {title: 'Archived', value: 'Archived'},
        ],
      },
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Technologies used, shown as pills on the project page.',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers appear first.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
      media: 'coverImage',
    },
  },
})
