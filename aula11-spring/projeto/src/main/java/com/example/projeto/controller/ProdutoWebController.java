package com.example.projeto.controller;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.projeto.model.Produto;
import com.example.projeto.service.ProdutoService;

@Controller
@RequestMapping("/produtos")
public class ProdutoWebController {

    private final ProdutoService produtoService;

    public ProdutoWebController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    @GetMapping
    public String index() {
        return "redirect:/produtos/listar";
    }

    @GetMapping("/listar")
    public String listarProdutos(Model model) {
        model.addAttribute("lista", produtoService.listarProdutos());
        return "produtos/lista";
    }

    @GetMapping("/cadastrar")
    public String exibirFormCadastro(Model model) {
        model.addAttribute("produto", new Produto());
        return "produtos/form";
    }

    @PostMapping("/cadastrar")
    public String cadastrarProduto(
            @ModelAttribute("produto") Produto produto,
            RedirectAttributes ra) {
        produtoService.salvarProduto(produto);
        ra.addFlashAttribute("success", "Produto cadastrado com sucesso!");
        return "redirect:/produtos/listar";
    }

    @GetMapping("/{id}")
    public String detalhesProduto(@PathVariable Long id, Model model) {
        Produto p = produtoService.buscarPorId(id)
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Produto não encontrado, id: " + id
            ));
        model.addAttribute("produto", p);
        return "produtos/detalhe";
    }

    @PostMapping("/{id}/excluir")
    public String excluirProduto(@PathVariable Long id, RedirectAttributes ra) {
        produtoService.deletarProduto(id);
        ra.addFlashAttribute("success", "Produto excluído com sucesso!");
        return "redirect:/produtos/listar";
    }
}