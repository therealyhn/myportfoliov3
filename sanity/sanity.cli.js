import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'va67sdm9',
    dataset: 'production',
  },
  deployment: {
    autoUpdates: true,
  },
})
