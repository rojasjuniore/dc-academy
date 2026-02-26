import { ChangePasswordForm } from "@/components/change-password-form"

// TODO: Obtener userId de la sesión actual
// Por ahora hardcodeado para testing
const DEMO_USER_ID = "demo-user-id"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Mi Perfil
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1">
            Gestiona tu información personal y seguridad
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Sección de seguridad */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">
              Seguridad
            </h2>
            <ChangePasswordForm userId={DEMO_USER_ID} />
          </section>

          {/* Placeholder para más opciones de perfil */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">
              Información Personal
            </h2>
            <div className="rounded-lg border border-dashed border-zinc-300 dark:border-zinc-700 p-8 text-center text-zinc-500">
              <p>Próximamente: editar nombre, avatar y más</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
