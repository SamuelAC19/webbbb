
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 font-sans">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Samuel Alves de Carvalho</h1>
        <p className="text-lg text-gray-600">Programador Web</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" target="_blank"><Github className="w-5 h-5" /></a>
          <a href="#" target="_blank"><Linkedin className="w-5 h-5" /></a>
          <a href="#" target="_blank"><Instagram className="w-5 h-5" /></a>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold">Projeto 1: Portfólio Minimalista</h2>
            <p className="text-sm text-gray-700 mt-2">
              Um site pessoal desenvolvido em React para mostrar minhas habilidades, contatos e projetos.
            </p>
            <Button className="mt-4" variant="outline">Ver Projeto</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold">Projeto 2: Dashboard de Tarefas</h2>
            <p className="text-sm text-gray-700 mt-2">
              Aplicativo web para organização de tarefas e produtividade com autenticação e banco de dados.
            </p>
            <Button className="mt-4" variant="outline">Ver Projeto</Button>
          </CardContent>
        </Card>
      </main>

      <footer className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Samuel Alves de Carvalho. Todos os direitos reservados.
      </footer>
    </div>
  );
}
