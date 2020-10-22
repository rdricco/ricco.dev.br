---
title: Contato
img_path: images/contact.jpg
form_id: contactForm
form_action: /success
form_fields:
  - type: form_field
    template: form_field
    input_type: text
    name: name
    label: Nome
    default_value: Seu nome
    is_required: true
  - type: form_field
    template: form_field
    input_type: email
    name: email
    label: Email
    default_value: Seu email
    is_required: true
  - type: form_field
    template: form_field
    input_type: select
    name: Assunto
    label: Assunto
    default_value: Selecionar
    options:
      - Proposta de Trabalho
      - Contato Pessoal
      - Outro
  - type: form_field
    template: form_field
    input_type: textarea
    name: message
    label: Mensagem
    default_value: Sua mensagem
  - type: form_field
    template: form_field
    input_type: checkbox
    name: consent
    label: >-
      Eu entendo que as informações emviadas por esse formlário serão usadas
      para me contactar. 
submit_label: Enviar
template: contact
---

Para entrar em contato, preencha o formulário abaixo.
