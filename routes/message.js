import { Router } from 'express';
import uuidv4 from 'uuid/v4';

const router = Router();

router.get('/', (req, res) => {
  res.send(Object.values(req.context.models.messages));
});

router.get('/:messageId', (req, res) => {
  res.send(req.context.models.messages[req.params.messageId]);
});

router.post('/', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.context.me.id,
  };

  req.context.models.messages[id] = message;

  res.send(message);
});

router.delete('/:mesageId', (req, res) => {
  const { [req.params.messageId]: message, ...otherMessages } = req.models.messages;
  req.models.messages = otherMessages;
  res.send(message);
});

export default router;
