// 4. Linked List: Reverse

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current) {
    const nextNode = current.next; // сохраняем следующий узел
    current.next = prev; // переворачиваем указатель
    prev = current; // сдвигаем prev и current вперёд
    current = nextNode;
  }

  return prev; // новый head
}
