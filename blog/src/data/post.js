export const actions = [
  { icon: '↺',  label: 'Restart Site',               desc: 'Restart app in any environment'         },
  { icon: 'DB', label: 'Database Backup',             desc: 'Create a .bacpac backup for debugging'  },
  { icon: '🔑', label: 'Generate DB Credentials',    desc: 'Secure credentials for DB access'       },
  { icon: '⬆',  label: 'Base Code Deploy',           desc: 'Deploy base application code'           },
  { icon: 'EX', label: 'Extension Deployment',        desc: 'Deploy custom extension changes'        },
  { icon: '⇄',  label: 'User Files Sync',            desc: 'Sync user files from production'        },
  { icon: '⇄',  label: 'Production DB Sync',         desc: 'Sync prod database to lower env'        },
];

export const restartSteps1 = [
  'Log in to <strong>Mission Control</strong>.',
  'Navigate to the <strong>Customers</strong> tab.',
  'Select the appropriate <strong>Customer</strong>.',
];
export const restartSteps2 = [
  'Choose the <strong>Environment</strong> where the restart is needed.',
  'Click on the <strong>Action</strong> dropdown in the left pane.',
  'Select <strong>Restart Site</strong> from the list.',
  'A pop-up will appear — either <strong>schedule the restart</strong> or click <strong>Continue</strong> for an <strong>immediate restart</strong>.',
];

export const backupSteps1 = [
  'Log in to <strong>Mission Control</strong>.',
  'Navigate to the <strong>Customers</strong> tab.',
  'Select <strong>Database Backup</strong> from the list.',
];
export const backupSteps2 = [
  'A pop-up will appear prompting for a scheduled backup time.',
  'Set <strong>Skip Log</strong> to <strong>False</strong> to minimize the backup size.',
  'Click <strong>Continue</strong> and wait for the process to complete.',
  'Once finished, click the provided link to <strong>download the backup file</strong>.',
];
