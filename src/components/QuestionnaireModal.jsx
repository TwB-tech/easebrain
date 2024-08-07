// components/QuestionnaireModal.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Modal from 'react-modal'; // Add the modal library

const schema = z.object({
  answer: z.string().nonempty(),
});

const QuestionnaireModal = ({ isOpen, onClose, questions, onComplete }) => {
  const { handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const onSubmit = (data) => {
    setAnswers([...answers, data.answer]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete(answers); // Pass answers to the completion handler
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="your-modal-class">
      <div className="bg-white rounded-lg shadow-md p-4 w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <h2 className="text-xl font-bold mb-4">{questions[currentQuestionIndex].question}</h2>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                type="button"
                onClick={() => onSubmit({ answer: option })}
                className="w-full text-left bg-gray-100 hover:bg-gray-200 p-2 rounded-md mt-2"
              >
                {option}
              </button>
            ))}
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default QuestionnaireModal;
