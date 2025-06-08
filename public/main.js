let usuarios = []
let editandoId = null

async function carregarUsuarios() {
  try {
    const res = await fetch('http://localhost:3000/usuarios')
    if (!res.ok) throw new Error('Erro ao buscar usuários')
    usuarios = await res.json()
    renderizarUsuarios()
  } catch (e) {
    alert('Erro ao carregar usuários do servidor.')
  }
}

function renderizarUsuarios() {
  const lista = document.querySelector('.listaUsuarios')
  lista.innerHTML = ''

  usuarios.forEach((usuario, index) => {
    const usuarioCard = document.createElement('div')
    usuarioCard.className = 'usuarioCard'
    usuarioCard.innerHTML = `
      <p><strong>ID:</strong> ${usuario.id}</p>
      <p><strong>Nome:</strong> ${usuario.nome}</p>
      <p><strong>Profissão:</strong> ${usuario.profissao}</p>
      <p><strong>Salário:</strong> R$ ${usuario.salario}</p>
      <button onclick="editarUsuario(${usuario.id})">Editar</button>
      <button onclick="excluirUsuario(${usuario.id})">Excluir</button>
    `
    lista.appendChild(usuarioCard)
  })
}

async function adicionarOuAtualizarUsuario() {
  const nome = document.getElementById('inputNome').value
  const profissao = document.getElementById('inputProfissao').value
  const salario = document.getElementById('inputSalario').value

  if (!nome || !profissao || !salario) {
    alert('Preencha todos os campos')
    return
  }

  const dados = { nome, profissao, salario: parseFloat(salario) }

  if (editandoId) {
    try {
      await fetch(`http://localhost:3000/usuarios/${editandoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
      })
      editandoId = null
    } catch {
      alert('Erro ao atualizar usuário')
      return
    }
  } else {
    try {
      await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
      })
    } catch {
      alert('Erro ao adicionar usuário')
      return
    }
  }

  limparCampos()
  carregarUsuarios()
}

function limparCampos() {
  document.getElementById('inputNome').value = ''
  document.getElementById('inputProfissao').value = ''
  document.getElementById('inputSalario').value = ''
  editandoId = null
}

async function editarUsuario(id) {
  try {
    const res = await fetch(`http://localhost:3000/usuarios/${id}`)
    if (!res.ok) throw new Error()
    const usuario = await res.json()

    document.getElementById('inputNome').value = usuario.nome
    document.getElementById('inputProfissao').value = usuario.profissao
    document.getElementById('inputSalario').value = usuario.salario
    editandoId = id
  } catch {
    alert('Erro ao carregar usuário para edição')
  }
}

async function excluirUsuario(id) {
  if (!confirm('Deseja mesmo excluir este usuário?')) return

  try {
    await fetch(`http://localhost:3000/usuarios/${id}`, { method: 'DELETE' })
    carregarUsuarios()
  } catch {
    alert('Erro ao excluir usuário')
  }
}

document.getElementById('botaoAdicionar').addEventListener('click', adicionarOuAtualizarUsuario)
window.onload = carregarUsuarios
