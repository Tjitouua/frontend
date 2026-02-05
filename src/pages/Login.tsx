import React from 'react'
import Button from '../components/Button'

export default function Login(){
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="rounded-lg border border-secondary-border bg-secondary-card p-8 shadow-card max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-text-heading mb-4">Login</h2>
        <p className="text-text-DEFAULT mb-6">
          This project uses Keycloak for authentication. Configure Keycloak (see docker-compose) and set up a realm/client named <strong>ecitizen</strong>.
        </p>
        <p>
          <Button
            onClick={() => alert('Redirect to Keycloak (stub)')}
            variant="primary"
          >
            Login with GovID
          </Button>
        </p>
      </div>
    </div>
  )
}
