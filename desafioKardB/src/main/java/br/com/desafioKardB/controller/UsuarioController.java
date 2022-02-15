package br.com.desafioKardB.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.desafioKardB.model.Usuario;
import br.com.desafioKardB.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(allowedHeaders = "*", origins = "*")
public class UsuarioController {

	@Autowired
	private UsuarioRepository repository;
	
	//Buscar todos usuarios
	@GetMapping
	public ResponseEntity<List<Usuario>> GetAll() {
		return ResponseEntity.ok(repository.findAll());
	}
	
	//Buscar um usuario pelo nome
	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<Usuario>> GetByNome(@PathVariable String nome) {
		return	ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome));
	}
	
	//Cadastrar um usuario.
	@PostMapping
	public ResponseEntity<Usuario> postUsuario(@RequestBody Usuario usuario) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(usuario));
	}
	
	//Atualizar um usuario.
	@PutMapping
	public ResponseEntity<Usuario> putUsuario(@RequestBody Usuario usuario) {
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(usuario));
	}
	
	//Deletar um usuario pelo ID
	@DeleteMapping("/{id}")
	public void deleteUsuario(@PathVariable long id) {
		repository.deleteById(id);
	}
	
}
