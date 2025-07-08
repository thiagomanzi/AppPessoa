using Microsoft.AspNetCore.Mvc;
using PessoasApi.Models;

namespace PessoasApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PessoasController : ControllerBase
{
    private static readonly List<Pessoa> Pessoas = Enumerable.Range(1, 30).Select(i => new Pessoa
    {
        Cpf = $"123.456.789-{i:D2}",
        Nome = $"Pessoa {i}",
        Genero = i % 2 == 0 ? "Masculino" : "Feminino",
        Endereco = $"Rua Exemplo {i}, 123",
        Idade = 20 + (i % 50),
        Municipio = $"Cidade {i}",
        Estado = $"Estado {(char)('A' + (i % 26))}"
    }).ToList();

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(Pessoas);
    }
}